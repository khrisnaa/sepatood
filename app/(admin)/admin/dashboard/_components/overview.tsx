'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  YAxis,
} from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  {
    month: 'Jan',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Feb',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Mar',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Apr',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'May',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Jun',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Jul',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Aug',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Sep',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Oct',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Nov',
    total: Math.floor(Math.random() * 500) + 100,
  },
  {
    month: 'Dec',
    total: Math.floor(Math.random() * 500) + 100,
  },
];

const chartConfig = {
  total: {
    label: 'light',
    color: '#00000',
  },
} satisfies ChartConfig;

export function Overview() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="total" radius={4} />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </BarChart>
    </ChartContainer>
  );
}
