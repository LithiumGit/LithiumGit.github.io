import '../styles/download.scss';
import { UiUtils } from '../../lib/utilities/UiUtils';
import { Metadata } from 'next';
import { PageChild } from './pageChild';
import { IMetadataParams } from '../../lib/interfaces';

export function generateMetadata(args:IMetadataParams){    
    const data = UiUtils.getCommonHeaderInfo(args,"download");
    data.title = "Download LithiumGit | Free Git GUI for Windows, Mac & Linux";
    data.description = "Download LithiumGit — the free, open-source Git GUI client for Windows, Mac, and Linux. Simple installation, no sign-up required. Start managing your Git repositories today.";
    data.openGraph!.title = "Download LithiumGit | Free Git GUI for Windows, Mac & Linux";
    data.openGraph!.description = "Download LithiumGit — the free, open-source Git GUI client for Windows, Mac, and Linux. No sign-up required.";
    (data as any).twitter = {
        ...(data as any).twitter,
        title: "Download LithiumGit | Free Git GUI for Windows, Mac & Linux",
        description: "Download LithiumGit — free Git GUI client for Windows, Mac, and Linux. No registration needed.",
    };
    return data;
}

export default function Download(){               
    return <main className='w-100 download' style={{minHeight:`${UiUtils.getMinHeighOfMainPanel()}`}}>
        <PageChild />
    </main>
}