import faqData from "@/helper/faqData";
import Question from "./question";

const Faq = () => {
  return (
    <section className="text-grayBodtText py-16 px-5">
      <div className=" max-w-5xl mx-auto pl-5 md:pl-8">
        <div className="text-center mb-12 pb-10">
          <h2 className="text-display2 font-display mb-12">FAQ</h2>
          <p className="pb-9">Find the answer to your questions.</p>
          <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded" />
        </div>
        <div>
          {faqData.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
