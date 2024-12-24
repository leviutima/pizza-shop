import { Helmet } from "react-helmet-async";
import { MonthRevenueCard } from "./month-revenue";
import { MonthOrderAmoutCard } from "./month-order-amount";
import { DayOrdersAmoutCard } from "./day-orders-amout-card";
import { MonthCanceledCard } from "./month-canceled-orders-card";
import { ReviewChart } from "./review-chart";
import { PopularProductsChart } from "./popular-products-chart";


export function Dashboard() {
    return(
        <>
            <Helmet title="Dashboard"/>
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="grid grid-cols-4 gap-4">
                    <MonthRevenueCard />
                    <MonthOrderAmoutCard />
                    <DayOrdersAmoutCard />
                    <MonthCanceledCard />
                </div>
                <div className="grid grid-cols-9 gap-4">
                    <ReviewChart />
                    <PopularProductsChart />
                </div>
            </div>
        </>
    )
}