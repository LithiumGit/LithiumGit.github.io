import { IMetadataParams } from '../lib/interfaces';
import { UiUtils } from '../lib/utilities/UiUtils';
import { PageChild } from './pageChild';
import './styles/home.scss';

export function generateMetadata(args:IMetadataParams){
    args.path = "";
    const data = UiUtils.getCommonHeaderInfo(args);
    return data;
}

export default function Home() {  
  return (
      <main>
        <PageChild />
      </main>
  );
}
