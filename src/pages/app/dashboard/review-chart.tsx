import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import colors from "tailwindcss/colors"

const data = [
  {
    date: "12/12",
    revenue: 3100,
  },
  {
    date: "5/11",
    revenue: 1030,
  },
  {
    date: "10/09",
    revenue: 5120,
  },
  {
    date: "10/01",
    revenue: 5214,
  },
  {
    date: "10/02",
    revenue: 4301,
  },
  {
    date: "10/03",
    revenue: 12300,
  },
  {
    date: "10/04",
    revenue: 3430,
  },
];

export function ReviewChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receite diraria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis tickLine={false}  dataKey="date" axisLine={false} dy={16}></XAxis>
            <YAxis
              dataKey="revenue"
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.violet['500']}></Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
