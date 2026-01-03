import { Distributions } from "@/lib";
import React from "react";
import { FaWindows } from "react-icons/fa";


function DownloadFromMsStoreComponent() {
    return (
        <div className="d-flex flex-column align-items-center">
            <p className="pb-3">Or</p>
            <div className='d-flex bg-brand align-items-center px-3 py-2 hover'>
                <a href={Distributions.MsStoreLink} target="_blank" className='text-light'>
                    <FaWindows /> <span className='ps-2'>View In Microsoft Store</span>
                </a>
            </div>            
        </div>
    );
}

export const DownloadFromMsStore = React.memo(DownloadFromMsStoreComponent);