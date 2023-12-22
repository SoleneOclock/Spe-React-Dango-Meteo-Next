interface WidgetProps {
  city: string;
  code: string;
}

function WidgetMeteo({ city, code }: WidgetProps) {
  return (
    <div className="bg-white/20 p-5 rounded-md border-solid border-white border-2 m-4 w-8/12">
      <div className="font-bold text-xl">{city}</div>
      <div className="text-sm">{code}</div>
      <div className="font-bold text-2xl">10°C</div>
    </div>
  )
}

export default WidgetMeteo;