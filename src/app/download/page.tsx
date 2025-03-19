import '../styles/download.scss';
import { UiUtils } from '../../lib/utilities/UiUtils';
import { Metadata } from 'next';
import { PageChild } from './pageChild';
import { IMetadataParams } from '../../lib/interfaces';

export function generateMetadata(args:IMetadataParams){    
    const data = UiUtils.getCommonHeaderInfo(args,"download");
    return data;
}

export default function Download(){               
    return <main className='w-100 download' style={{minHeight:`${UiUtils.getMinHeighOfMainPanel()}`}}>
        <PageChild />
    </main>
}