import { api } from "../../services/api";
import { useEffect, useState } from "react";

import { Progress } from "@material-tailwind/react";

// components
import { CounterBlock } from "./CounterBlock";

// types
import { ProductProps } from "../ProductTypes";
interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => (
  <div className="flex gap-2 my-2">
    <CounterBlock value={days} title="days" />
    <CounterBlock value={hours} title="hours" />
    <CounterBlock value={minutes} title="min" />
    <CounterBlock value={seconds} title="sec" />
  </div>
);

export function PromoCard() {
  const [product, setProduct] = useState<ProductProps>();
  const [timerValues, setTimerValues] = useState({
    days: 10,
    hours: 4,
    minutes: 15,
    seconds: 60,
  });

  const time = 900;
  let counter: number;

  useEffect(() => {
    api.get("/products").then((response) => {
      const promoProduct: ProductProps = response.data.find(
        (product: ProductProps) => product.type === "Promo"
      );

      setProduct(promoProduct);
    });

    counter = setInterval(() => {
      setTimerValues((prevValues) => {
        let newSeconds = prevValues.seconds - 1;
        let newMinutes = prevValues.minutes;
        let newHours = prevValues.hours;
        let newDays = prevValues.days;

        if (newSeconds === 0) {
          newSeconds = 59;
          newMinutes--;

          if (newMinutes === 0) {
            newMinutes = 59;
            newHours--;

            if (newHours === 0) {
              newHours = 23;
              newDays--;
            }
          }
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, time);

    return () => {
      clearInterval(counter);
    };
  }, []);

  if (product) {
    return (
      <div className="flex flex-col items-center px-7">
        <div className="w-full border-b mb-4 py-3">
          <h3 className="font-bold">Daily Deal</h3>
        </div>

        <div className="flex flex-col border rounded-xl p-6">
          <img
            src={product.cover}
            alt={product.title}
            className="w-full p-3 cursor-pointer transition-all hover:scale-105"
          />

          <div className="flex flex-col">
            <h4 className="overflow-hidden whitespace-nowrap text-ellipsis font-bold mb-1">
              {product.title}
            </h4>
            <p className="text-xs">{product.description}</p>

            <div className="flex items-center gap-1 my-2">
              <h3 className="text-pink font-bold text-lg">
                ${product.price.toFixed(2)}
              </h3>
              <del className="text-sm">${product.old_price.toFixed(2)}</del>
            </div>

            <button className="bg-pink font-bold text-white cursor-pointer rounded-lg py-2 transition-all hover:bg-lightPink">
              SHOP NOW
            </button>

            <div>
              <div className="flex justify-between text-xs my-3">
                <p>
                  SOLD: <b>30</b>
                </p>
                <p>
                  AVALIABE: <b>20</b>
                </p>
              </div>
              <Progress
                value={60}
                placeholder=""
                size="lg"
                className="border bg-gray-900/5 p-1"
                color="purple"
              />
            </div>
          </div>

          <section className="mt-4">
            <h5 className="font-bold uppercase">Offer ends in</h5>
            <Timer {...timerValues} />
          </section>
        </div>
      </div>
    );
  }
}
