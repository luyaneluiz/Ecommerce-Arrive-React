import { api } from "../../../services/api";
import { useEffect, useState } from "react";

import { Progress } from "@material-tailwind/react";

// components
import { CounterBlock } from "../CounterBlock";
import { Button } from "../../../components/Button";
import { Title } from "../../../components/Titlte";

// types
import { ProductProps } from "../../../types/ProductTypes";
interface TimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<TimerProps> = ({ days, hours, minutes, seconds }) => (
  <div className="flex gap-2 mt-2">
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
      <section className="flex flex-col items-center">
        <Title text="Daily Deal" />

        <div className="flex flex-col items-center border rounded-xl p-6 w-full lg:flex-row">
          <img
            src={product.cover}
            alt={product.title}
            className="w-full sm:max-w-[300px] lg:max-w-[50%] px-3 cursor-pointer transition-all duration-500 hover:scale-105"
          />

          <section className="sm:ps-3 lg:max-w-[50%]">
            <div className="flex flex-col">
              <h4 className="overflow-hidden whitespace-nowrap text-ellipsis font-bold mb-1 sm:text-2xl">
                {product.title}
              </h4>

              <p className="text-xs">{product.description}</p>

              <div className="flex items-center gap-1 my-2">
                <h3 className="text-pink font-bold text-lg sm:text-2xl">
                  ${product.price.toFixed(2)}
                </h3>
                <del className="text-sm">${product.old_price.toFixed(2)}</del>
              </div>

              <Button text="SHOP NOW" />

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
          </section>
        </div>
      </section>
    );
  }
}
