import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss";
import { EnumTheme, StorageUtils } from '../lib';


// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={StorageUtils.getTheme()}>
      <body>
        {children}
      </body>
    </html>
  );
}
