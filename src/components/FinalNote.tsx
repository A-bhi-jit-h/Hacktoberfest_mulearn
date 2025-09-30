const FinalNote = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg md:text-xl text-foreground/90 leading-relaxed">
          <p className="mb-4">
            Hacktoberfest isn't just about swags, it's about learning, collaborating, and giving back to the community.
            Dive in, start coding, and let's make this October unforgettable!
          </p>
          <footer className="text-base text-muted-foreground not-italic">
            — Team <strong className="text-primary">INOVUS LABS IEDC x µLearn x µLearn SCTCE x Purple Movement</strong>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default FinalNote;
