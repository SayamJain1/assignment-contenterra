const decodeHtmlEntities = (html) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent;
};

const Card = ({ data }) => {
  return (
    <div className="flex flex-col gap-3">
      {data.length > 0 &&
        data.map((d, i) => (
          <div className="p-4 border border-black rounded-md min-w-fit" key={i}>
            <h3 className=" font-medium text-xl mb-4">{d.data.title}</h3>
            <div className="text-wrap"
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(d.data.selftext_html),
              }}
            />
            <a className="text-blue-600 text-wrap" href={d.data.url}>
              {d.data.url}
            </a>
            <h2>
              {d.data.score ? `Score: ${d.data.score}` : "No score found"}
            </h2>
          </div>
        ))}
    </div>
  );
};

export default Card;
