"use client";
import AppliedColorFilter from "@/components/shop/applied-filters/applied-color-filter";
import AppliedSizeFilter from "@/components/shop/applied-filters/applied-size-filter";
import AppliedCategoryFilter from "@/components/shop/applied-filters/applied-category-filter";
import AppliedPriceFilter from "@/components/shop/applied-filters/applied-price-filter";
import AppliedBrandFilter from "./applied-brand-filter";
const AppliedFilters = () => {
  return (
    <div className="flex items-start mt-[20px] flex-wrap">
      <AppliedColorFilter />
      <AppliedSizeFilter />
      <AppliedCategoryFilter />
      <AppliedPriceFilter />
      <AppliedBrandFilter />
    </div>
  );
};

export default AppliedFilters;
