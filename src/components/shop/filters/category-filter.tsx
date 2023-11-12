"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/form/radio-group";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useFilter from "@/hooks/useFilter";
import { Label } from "@/components/ui/form/label";
import { v4 as uuidv4 } from "uuid";

interface Props {
  categoriesArray: { name: string; value: string }[];
  titleClass:string;
}
const CategoryFilter = ({ categoriesArray,titleClass }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { createQueryString } = useFilter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);

  const defaultValue = params.get("category");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="category" className="border-0 group">
        <AccordionTrigger className={`${titleClass} focus-visible:outline-0`}>
          CATEGORY
        </AccordionTrigger>

        {categoriesArray && (
          <AccordionContent>
            <RadioGroup
              className="flex flex-col items-start"
              defaultValue={
                defaultValue ? defaultValue : (undefined as string | undefined)
              }
              onValueChange={(value) =>
                router.push(
                  pathname + "?" + createQueryString("category", value),
                  { scroll: false }
                )
              }
            >
              {categoriesArray.map((item) => (
                <div key={uuidv4()} className="flex items-center space-x-2 mb-[10px]">
                  <RadioGroupItem
                    value={item.value}
                    checked={item.value === defaultValue}
                    id={item.value}
                  />
                  <Label
                    className={`md:text-[12px] ${
                      item.value === defaultValue
                        ? "text-secondaryhover"
                        : " text-gray-500"
                    }`}
                    htmlFor={item.value}
                  >
                    {item.name}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </AccordionContent>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default CategoryFilter;
