import BreadCrumbs from "@/components/shop/breadcrumbs";
import FilterSidebar from "@/components/shop/filters/filters-sidebar";
import Controls from "@/components/shop/controls";
import AppliedFilters from "@/components/shop/applied-filters/applied-filters";
import CurrentCategory from "@/components/shop/filters/current-category";
import ShopProducts from "@/components/shop/shop-products";
import { products } from "@/constants/products";
import Pagination from "@/components/shop/pagination";
import RecentlyViewed from '@/components/shop/recently-viewed'
const page = () => {
  return (
    <div className="font-roboto bg-[#F7F8FC]">
      <BreadCrumbs />
      <div className="container-fluid">
        <CurrentCategory totalProducts={200} />
        <div className="flex">
          <div className="md:hidden">
            <FilterSidebar />
          </div>
          <div className="mt-[10px] w-full">
            <div className="px-[15px] md:px-0 py-[10px] w-full">
              <Controls />
            </div>
            {/* Applied Filters */}
            <AppliedFilters />
            {/* ShopProducts */}
            <ShopProducts products={products} />
          </div>
        </div>
        {/* Pagination */}
        <Pagination />
        {/* Recently viewed products */}
        <RecentlyViewed products={products.slice(0,4)} />
      </div>
    </div>
  );
};

export default page;
