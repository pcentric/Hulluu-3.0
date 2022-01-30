export default function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer ">
      <Icon className="h-8 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0  group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
