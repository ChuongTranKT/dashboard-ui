type ColumnChartType = {
  first_height: string
  second_height: string
  first_bg_color: string
  second_bg_color: string
}

const ColumnChart = ({
  first_height,
  second_height,
  first_bg_color,
  second_bg_color,
}: ColumnChartType) => {
  return (
    <div className="flex items-end  justify-start gap-1">
      <div
        className={`${first_height} max-h-44 w-1.5 rounded-2xl ${first_bg_color} md:w-2.5 xl:w-3.5`}
      ></div>
      <div
        className={`${second_height} max-h-44 w-1.5 rounded-2xl ${second_bg_color} opacity-70 md:w-2.5 xl:w-3.5`}
      ></div>
    </div>
  )
}

export default ColumnChart
