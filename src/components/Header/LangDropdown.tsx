import { FC, Fragment, useEffect, useState } from "react";
import { Popover, Tab, Transition } from "app/headlessui";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next"; 
import { useDispatch, useSelector } from "react-redux"; 
import { fetchWebsiteTitle, setCurrentLayoutLanguage } from "../../redux/core/core-slice"; 
import { LayoutLanguage } from '../../models/common'
import { RootState } from "redux/store";

export const headerLanguage = [
  {
    id: LayoutLanguage.Azerbaijani,
    name: "Azərbaycan",
    description: "",
    active: true,
  },
  {
    id: LayoutLanguage.English,
    name: "English",
    description: "",
    active: false,
  },
  {
    id: LayoutLanguage.Russian,
    name: "Русский",
    description: "",
    active: false,
  },
];

interface LangDropdownProps {
  panelClassName?: string;
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const LangDropdown: FC<LangDropdownProps> = ({ panelClassName = "" }) => {
  const { t, i18n } = useTranslation(); 
  const dispatch = useDispatch(); 
  const currentLayoutLanguage = useSelector((state: RootState) => state.core.currentLayoutLanguage);
  const websiteTitle = useSelector((state: RootState) => state.core.websiteTitle);
 
  const [headerLanguageState, setHeaderLanguageState] = useState(
    headerLanguage.map(lang => ({
      ...lang,
      active: lang.id === currentLayoutLanguage,
    }))
  );
  
  const renderLang = (close: () => void) => {
    return (
      <div className="grid gap-8 lg:grid-cols-2">
        {headerLanguageState.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              close();
              i18n.changeLanguage(String(item?.id)); 
              dispatch(setCurrentLayoutLanguage(item?.id)); 
              // Update the headerLanguage array to set the active property
              const updatedHeaderLanguage = headerLanguageState.map(lang => ({
                ...lang,
                active: lang.id === item.id,
              }));
              setHeaderLanguageState(updatedHeaderLanguage);
             window.location.reload()
            }}
            className={`flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 ${
              item.active ? "bg-gray-100 dark:bg-gray-700" : "opacity-80"
            }`}
          >
            <div className="">
              <p className="text-sm font-medium ">{t(item.name)}</p> {/* Translate name */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {t(item.description)} {/* Translate description */}
              </p>
            </div>
          </button>
        ))}
      </div>
    );
  };

  useEffect(() => {
    // Fetch website title when language changes
    // @ts-ignore
    dispatch(fetchWebsiteTitle(currentLayoutLanguage));

    
    
  }, [dispatch, currentLayoutLanguage]);

  // Render function for currencies
  // ...

  return (
    // ! hidden class is deleted 
    <div className="LangDropdown  sm:block"> 
      <Popover className="relative">
        {({ open, close }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-80"}
             group h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="px-2">{headerLanguageState.find(item => item.active)?.name}</span> 
              <GlobeAltIcon className="w-[24px] h-[24px] opacity-80" />
              <ChevronDownIcon
                className={`${open ? "-rotate-180" : "text-opacity-70"}
                  ml-1 h-4 w-4  group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={`absolute z-20 w-96 mt-3.5 right-0 ${panelClassName}`}
              >
                <div className="p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg ring-1 ring-black ring-opacity-5">
                  <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-full bg-gray-100 dark:bg-slate-700 p-1">
                      {[t("language")].map((category) => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              "w-full rounded-full py-2 text-sm font-medium leading-5 text-gray-700",
                              "focus:outline-none focus:ring-0",
                              selected
                                ? "bg-white shadow"
                                : "text-gray-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-900/40"
                            )
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                      <Tab.Panel
                        className={classNames(
                          "rounded-xl p-3",
                          "focus:outline-none focus:ring-0"
                        )}
                      >
                        {renderLang(close)}
                      </Tab.Panel>
                      {/* Render currency panel */}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default LangDropdown;
