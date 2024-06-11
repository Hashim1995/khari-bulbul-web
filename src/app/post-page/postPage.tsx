import PageSingle from 'app/(singles)/(default)/single/page';
import Loading from 'components/Button/Loading';
import { IBlogsItem } from 'data/types';
import React, { useEffect, useState } from 'react'
// @ts-ignore
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import api from 'utils/axios';
import LogoAAA from "../../images/LogoAAA.png";

function PostPage() {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [postData, setPostData] = useState<IBlogsItem>();

    const fetchById =  async() => {
        setIsLoading(true)
        try {
            const res = await api.get(`/Post/${id}`);
           setPostData(res?.data?.data)
        } catch (e) {
            console.log(e);
            
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchById()
    }, [])

  return (
    <>
    {!isLoading ? (<div className='bg-image'>
      {postData && <Helmet>
        <title>{postData ? postData?.name : ""}</title>
        <meta name="description" content={postData ? postData?.content: ""} />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content={postData ? postData?.name : ""} />
        <meta property="og:description" content={postData ? postData?.content : ""} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://dev.optima.az:8305/posts/${id}`} />
        <meta
          property="og:image"
          content={`https://dev.optima.az:8305/${LogoAAA}`}
        />
        <meta
          name="keywords"
          content={`${postData ? postData?.name : ""}`}
        />
      </Helmet>}
     <PageSingle description={postData?.description} post={postData}/>
    </div>) : (
         <div className=" flex justify-center  pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20">
         <Loading size="large" />
       </div>
    )}
    </>
   
  )
}

export default PostPage
