import "./footer.scss";
import { logo, phones, Navbar } from "../generalData/generalData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo-wp logo-wp">
          <img className="footer__logo logo" src={logo} alt="Cœur de Poméranien Bigouden" />
          <p className="footer__description">Que tous ceux qui rêvent d'un chiot soient sûrs de ressentir ce bonheur!</p>
        </div>

        <nav className="footer__nav nav">
          <Navbar.Links />
        </nav>

        <div className="footer__contacts">
          <ul className="footer__phones">
            <li className="footer__phone">
              <a className="phone" href={"tel:" + phones[0]}>
                <svg className="phone__icon" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.3425 14.7096L14.8125 13.2396C15.0105 13.044 15.261 12.9102 15.5336 12.8543C15.8062 12.7983 16.0891 12.8228 16.3481 12.9246L18.1397 13.6399C18.4014 13.7461 18.6258 13.9274 18.7846 14.161C18.9435 14.3946 19.0296 14.6699 19.0322 14.9524V18.2336C19.0307 18.4258 18.9903 18.6156 18.9134 18.7917C18.8366 18.9678 18.7249 19.1266 18.5852 19.2584C18.4454 19.3902 18.2803 19.4924 18.1 19.5588C17.9197 19.6251 17.7278 19.6543 17.5359 19.6446C4.98186 18.8636 2.44874 8.23237 1.96968 4.16362C1.94744 3.96382 1.96776 3.76157 2.0293 3.57018C2.09084 3.37879 2.1922 3.2026 2.32672 3.0532C2.46124 2.9038 2.62587 2.78458 2.80978 2.70337C2.99369 2.62217 3.19271 2.58082 3.39374 2.58206H6.56343C6.84628 2.5829 7.12241 2.66833 7.35631 2.82738C7.5902 2.98643 7.77117 3.21182 7.87593 3.47456L8.59124 5.26612C8.69641 5.52407 8.72324 5.80729 8.66838 6.0804C8.61353 6.35351 8.47941 6.60441 8.2828 6.80175L6.8128 8.27175C6.8128 8.27175 7.65936 14.0008 13.3425 14.7096Z"
                    fill="#492C0E"
                  />
                </svg>
                {phones[0]}
              </a>
            </li>
            <li className="footer__phone">
              <a className="phone" href={"tel:" + phones[1]}>
                {phones[1]}
              </a>
            </li>
          </ul>

          <div className="footer__social-media">
            <a className="footer__social-media-link" href="https://t.me/bonheures11" title="Telegram" target="_blank">
              <svg
                className="footer__social-media-icon footer__social-media-icon--stroke"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1099_25)">
                  <path
                    d="M0.75 16V5C0.75 2.65279 2.65279 0.75 5 0.75H16C18.3472 0.75 20.25 2.65279 20.25 5V16C20.25 18.3472 18.3472 20.25 16 20.25H5C2.65279 20.25 0.75 18.3472 0.75 16Z"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.21739 12.8478C9.90079 11.2847 12.1412 9.20431 13.6949 7.7616C13.9159 7.55638 13.6512 7.20835 13.3938 7.36562L6.13044 11.8043M8.21739 12.8478C9.17794 13.4591 10.677 14.413 10.677 14.413M8.21739 12.8478C8.21739 13.4591 8.21739 14 8.21739 14C8.21739 14 8.21739 14 8.21739 14L8.21739 15.7043M6.13044 11.8043L3.48507 10.4817C3.29421 10.3862 3.30294 10.111 3.49947 10.0278L16.1211 4.68791C16.3077 4.60894 16.5058 4.77322 16.4628 4.97126L14.0327 16.1498C13.9957 16.3197 13.8009 16.4009 13.6541 16.3076L10.677 14.413M6.13044 11.8043L7.59618 15.713C7.649 15.8538 7.8133 15.9165 7.94647 15.8466L10.677 14.413"
                    stroke="#492C0E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1099_25">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className="footer__social-media-link" href="https://www.tiktok.com/@coeur_de_pomerani" title="Tiktok" target="_blank">
              <svg
                className="footer__social-media-icon footer__social-media-icon--stroke"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1098_6)">
                  <path
                    d="M1 10.5C1 6.022 1 3.782 2.391 2.391C3.782 1 6.021 1 10.5 1C14.978 1 17.218 1 18.609 2.391C20 3.782 20 6.021 20 10.5C20 14.978 20 17.218 18.609 18.609C17.218 20 14.979 20 10.5 20C6.022 20 3.782 20 2.391 18.609C1 17.218 1 14.979 1 10.5Z"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.03589 9.50796C8.21589 9.39196 6.34589 9.58296 5.42989 11.278C4.51389 12.973 5.43689 14.737 6.01389 15.407C6.58289 16.034 8.39189 17.221 10.3109 16.062C10.7869 15.775 11.3799 15.56 12.0519 13.315L11.9739 4.48096C11.8439 5.45396 12.9189 7.73596 15.9779 8.00596"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1098_6">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              className="footer__social-media-link"
              href="https://www.leboncoin.fr/ad/animaux/2819394425"
              title="Leboncoin"
              target="_blank"
            >
              <svg
                className="footer__social-media-icon footer__social-media-icon--stroke"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1098_10)">
                  <path
                    d="M0.75 5.75V14.7499C0.75 17.5114 2.98858 19.7499 5.75 19.7499H14.75C17.5114 19.7499 19.75 17.5114 19.75 14.7499V5.75C19.75 2.98858 17.5114 0.75 14.75 0.75H5.75C2.98858 0.75 0.75 2.98858 0.75 5.75Z"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.25 8.25001H10.25C9.98793 8.24935 9.7283 8.30033 9.48593 8.40005C9.24357 8.49976 9.02323 8.64625 8.8375 8.83114C8.65177 9.01604 8.50429 9.23572 8.40349 9.47763C8.30268 9.71953 8.25052 9.97893 8.25 10.241V19.25L19.25 8.25001Z"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1098_10">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className="footer__social-media-link" href="https://www.facebook.com/janna.jegou" title="Facebook" target="_blank">
              <svg
                className="footer__social-media-icon footer__social-media-icon--stroke"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1099_18)">
                  <path
                    d="M1 10.5C1 6.022 1 3.782 2.391 2.391C3.782 1 6.021 1 10.5 1C14.978 1 17.218 1 18.609 2.391C20 3.782 20 6.021 20 10.5C20 14.978 20 17.218 18.609 18.609C17.218 20 14.979 20 10.5 20C6.022 20 3.782 20 2.391 18.609C1 17.218 1 14.979 1 10.5Z"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.427 6.526H12.482C11.9805 6.52599 11.4994 6.72424 11.1435 7.07754C10.7875 7.43084 10.5857 7.91052 10.582 8.412L10.496 19.927M8.58203 12.502H13.385"
                    stroke="#492C0E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1099_18">
                    <rect width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a className="footer__social-media-link" href="https://www.instagram.com/coeur_de_pomeranian" title="Instagram" target="_blank">
              <svg
                className="footer__social-media-icon footer__social-media-icon--fill"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 7.8C13.576 7.8 12.1839 8.22227 10.9999 9.01342C9.81586 9.80457 8.89302 10.9291 8.34807 12.2447C7.80312 13.5603 7.66053 15.008 7.93835 16.4047C8.21616 17.8013 8.90189 19.0842 9.90883 20.0912C10.9158 21.0981 12.1987 21.7838 13.5954 22.0617C14.992 22.3395 16.4397 22.1969 17.7553 21.6519C19.0709 21.107 20.1954 20.1841 20.9866 19.0001C21.7777 17.8161 22.2 16.424 22.2 15C22.2 13.0904 21.4414 11.2591 20.0912 9.90883C18.7409 8.55857 16.9096 7.8 15 7.8ZM15 19.8C14.0507 19.8 13.1226 19.5185 12.3333 18.9911C11.5439 18.4636 10.9287 17.714 10.5654 16.8369C10.2021 15.9598 10.107 14.9947 10.2922 14.0636C10.4774 13.1325 10.9346 12.2772 11.6059 11.6059C12.2772 10.9346 13.1325 10.4774 14.0636 10.2922C14.9947 10.107 15.9598 10.2021 16.8369 10.5654C17.714 10.9287 18.4636 11.5439 18.9911 12.3333C19.5185 13.1226 19.8 14.0507 19.8 15C19.796 16.2718 19.2891 17.4904 18.3897 18.3897C17.4904 19.2891 16.2718 19.796 15 19.8ZM21.6 0H8.4C6.17218 0 4.03561 0.884997 2.4603 2.4603C0.884997 4.03561 0 6.17218 0 8.4V21.6C0 23.8278 0.884997 25.9644 2.4603 27.5397C4.03561 29.115 6.17218 30 8.4 30H21.6C23.8278 30 25.9644 29.115 27.5397 27.5397C29.115 25.9644 30 23.8278 30 21.6V8.4C30 6.17218 29.115 4.03561 27.5397 2.4603C25.9644 0.884997 23.8278 0 21.6 0ZM27.6 21.6C27.6 22.3879 27.4448 23.1681 27.1433 23.8961C26.8418 24.6241 26.3998 25.2855 25.8426 25.8426C25.2855 26.3998 24.6241 26.8418 23.8961 27.1433C23.1681 27.4448 22.3879 27.6 21.6 27.6H8.4C7.61207 27.6 6.83185 27.4448 6.1039 27.1433C5.37595 26.8418 4.71451 26.3998 4.15736 25.8426C3.60021 25.2855 3.15825 24.6241 2.85672 23.8961C2.55519 23.1681 2.4 22.3879 2.4 21.6V8.4C2.4 6.8087 3.03214 5.28258 4.15736 4.15736C5.28258 3.03214 6.8087 2.4 8.4 2.4H21.6C22.3879 2.4 23.1681 2.55519 23.8961 2.85672C24.6241 3.15825 25.2855 3.60021 25.8426 4.15736C26.3998 4.71451 26.8418 5.37595 27.1433 6.1039C27.4448 6.83185 27.6 7.61207 27.6 8.4V21.6ZM24.6 7.2C24.6 7.55601 24.4944 7.90402 24.2966 8.20003C24.0989 8.49603 23.8177 8.72675 23.4888 8.86298C23.1599 8.99922 22.798 9.03487 22.4488 8.96541C22.0997 8.89596 21.7789 8.72453 21.5272 8.47279C21.2755 8.22106 21.104 7.90033 21.0346 7.55116C20.9651 7.202 21.0008 6.84008 21.137 6.51117C21.2733 6.18226 21.504 5.90114 21.8 5.70335C22.096 5.50557 22.444 5.4 22.8 5.4C23.2774 5.4 23.7352 5.58964 24.0728 5.92721C24.4104 6.26477 24.6 6.72261 24.6 7.2Z"
                  fill="#492C0E"
                />
              </svg>
            </a>
          </div>
        </div>

        <p className="footer__copyright">© 2024 Cœur de Poméranien Bigouden</p>

        <p className="developer">Le site a été développé: Vlad B.</p>
      </div>
    </footer>
  );
}

export default Footer;
