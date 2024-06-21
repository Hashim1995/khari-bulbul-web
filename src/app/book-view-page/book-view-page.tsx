import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "utils/axios";
import { IBooksItem } from "data/types";
import Button from "components/Button/Button";
import Loading from "components/Button/Loading";
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from "react-i18next";
import logo from "../../images/logo.png.png";
// @ts-ignore
import { Helmet } from "react-helmet";

function BookView() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<IBooksItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showPdf, setShowPdf] = useState<boolean>(false);

  const fetchBook = async () => {
    try {
      const response = await api.get(`/Book/${id}`);
      setBook(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching book:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
        <Loading size="large" />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="text-center mt-16">
        {/* <div className="text-5xl font-bold">Uh-oh!</div> */}
        <div className="text-xl mt-2">Kitab tapılmadı</div>
      </div>
    );
  }

  return (
    <div className="bg-image">
      <div className="book-view ">
        {book && (
          <Helmet>
            <title>{book ? book?.name : ""}</title>
            <meta name="description" content={book ? book?.description : ""} />
            <meta name="robots" content="noindex, follow" />
            <meta property="og:title" content={book ? book?.name : ""} />
            <meta
              property="og:description"
              content={book ? book?.description : ""}
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://dev.optima.az:8305/books/${id}`}
            />
            <meta
              property="og:image"
              content={`https://dev.optima.az:8305/${logo}`}
            />
            <meta
              name="keywords"
              content={`${book ? book?.name : ""}, ${book ? book?.author : ""}`}
            />
          </Helmet>
        )}
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 ">
          <img
            src={book?.coverPhoto?.fileUrl || ""}
            alt={book.name}
            className="book-cover rounded-lg shadow-md mr-8 mb-4 md:mb-0 object-cover w-48 h-64 z-10"
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "auto",
              maxHeight: "600px",
            }}
          />
          <div className="book-details flex flex-col w-full relative">
            <div>
              <h1 className="text-3xl font-bold">{book.name}</h1>
              <p className="text-lg font-bold mt-4">{t("author")}:</p>
              <p className="text-lg">{book.author}</p>
            </div>
            <div className="book-info mt-4 flex flex-col">
              <p className="text-lg font-bold">{t("price")}:</p>
              <p className="text-lg">{book?.price} AZN</p>
              <p className="text-lg font-bold mt-4">{t("additionalDate")}:</p>
              <p className="text-lg">{book.createdDate}</p>
              <p className="text-lg font-bold mt-4">{t("description")}:</p>
              <p className="text-lg">{book.description}</p>
            </div>
            <div className="flex justify-end  mt-auto">
              <Button pattern="primary" className="mr-4" href="/">
                {t("goBack")}
              </Button>
              {/* {book.pdfFile && <Button
              pattern="primary"
              className="flex items-center"
              onClick={() => setShowPdf(!showPdf)}
            >
              {showPdf ? "PDF-i gizlət" : "PDF-i göstər"} <GrDocumentPdf className="ml-2" />
            </Button>} */}
            </div>
          </div>
        </div>
        {/* <div>
        {showPdf && (
          <div className="flex justify-center">
            {book?.pdfFile?.fileUrl ? (
              <iframe
                src={book.pdfFile.fileUrl}
                title={book.pdfFile.title}
                width="70%"
                height="800px"
                frameBorder="0"
              />
            ) : (
              <div className="border border-gray-300 rounded-md p-4">
              <p className="text-lg text-center">PDF fayl yoxdur</p>
            </div>
            )}
          </div>
        )}
      </div> */}
      </div>
    </div>
  );
}

export default BookView;
