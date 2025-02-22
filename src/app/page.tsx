import { UiUtils } from '../lib/utilities/UiUtils';
import { PageChild } from './pageChild';
import './styles/home.scss';

export function generateMetadata(){
    const data = UiUtils.getCommonHeaderInfo();
    return data;
}

export default function Home() {  
  return (
      <main>
        <PageChild />
      </main>
  );
}
