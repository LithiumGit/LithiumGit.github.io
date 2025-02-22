import '../styles/download.scss';
import { UiUtils } from '../../lib/utilities/UiUtils';
import { Metadata } from 'next';
import { PageChild } from './pageChild';

function generateMetadata(){
    const data = UiUtils.getCommonHeaderInfo();
    return data;
}

export const metadata:Metadata = generateMetadata();

export default function Download(){               
    return <main className='w-100 download' style={{minHeight:`${UiUtils.getMinHeighOfMainPanel()}`}}>
        <PageChild />
    </main>
}