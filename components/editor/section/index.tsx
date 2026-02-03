import AddElement from "./add-element";

const Section = ({
  children = <AddElement />,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <section className="my-14 md:my-20 xl:my-24 border-dashed border-zinc-200 border-2">
      {children}
    </section>
  );
};

export default Section;
