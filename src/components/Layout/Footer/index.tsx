// images
import Logo from "../../../assets/logo.png";
import PaymentMethods from "../../../assets/payment-methods.png";

// icons
import {
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoPinterest,
} from "react-icons/bi";

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-300 p-7 text-sm flex flex-col gap-5 sm:flex-row sm:justify-center sm:gap-8">
        <aside className="flex flex-col gap-5 sm:flex-row sm:justify-around sm:w-[500px] sm:gap-9">
          <section>
            <img src={Logo} alt="Logo arrive" width={100} />
            <p>Avenue des Champs-Élysées, Paris, France</p>
            <p>(+33) 900-6543-99</p>
            <p>arriveboutique@contato.com</p>
            <p>arrive.boutique.com</p>
            <div className="flex mt-5">
              <BiLogoInstagram size={28} />
              <BiLogoFacebook size={28} />
              <BiLogoTwitter size={28} />
              <BiLogoPinterest size={28} />
            </div>
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Terms</h2>
            <a>Privacy Policy</a>
            <a>Terms & Condition </a>
            <a>Search Terms </a>
            <a>About us</a>
            <a>Order & Return</a>
          </section>
        </aside>

        <aside className="flex flex-col gap-5 sm:flex-row sm:justify-around sm:w-[500px] sm:gap-9">
          <section className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Popular</h2>
            <a>Fashion</a>
            <a>Cosmetic</a>
            <a>New Products</a>
            <a>Best Sales</a>
            <a>Footwear</a>
          </section>
          <div className="flex flex-col gap-5 max-w-[300px]">
            <section className="flex flex-col gap-2">
              <h2 className="font-bold text-xl">Newsletter</h2>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="py-2 px-3 outline-none rounded-sm w-full border-gray-400"
                  placeholder="Enter your e-mail here"
                />
                <button className="w-44 sm:w-36 py-2 px-3 bg-pink rounded-sm text-white cursor-pointer font-bold transition-all duration-500 hover:bg-lightPink">
                  SUBSCRIBE
                </button>
              </div>
            </section>
            <ul>
              <li className="border-b border-gray-500 flex justify-between py-3">
                <span>Monday - Friday</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="border-b border-gray-500 flex justify-between py-3">
                <span>Saturday</span>
                <span>10:00 - 20:00</span>
              </li>
              <li className="border-b border-gray-500 flex justify-between py-3">
                <span>Sunday</span>
                <span>13:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="flex flex-col items-center py-8">
        <p>
          © 2022 <span>Arrive</span> - All Right reserved!
        </p>
        <img src={PaymentMethods} alt="Payments Methods" width={260} />
      </div>
    </footer>
  );
}
