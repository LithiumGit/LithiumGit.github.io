import '../styles/download.scss';
import { UiUtils } from '../../lib/utilities/UiUtils';
import { Metadata } from 'next';
import { PageChild } from './pageChild';
import { IMetadataParams } from '../../lib/interfaces';

export function generateMetadata(args:IMetadataParams){
    args.path = "download";
    const data = UiUtils.getCommonHeaderInfo(args);
    return data;
}

export default function Download(){               
    return <main className='w-100 download' style={{minHeight:`${UiUtils.getMinHeighOfMainPanel()}`}}>
        <PageChild />
    </main>
}