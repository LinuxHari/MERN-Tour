type Link = {
  text: string;
  href: string;
};

type Props = {
  title: string;
  links: Link[];
};

const LinkList = ({title, links}: Props) => (
  <div className="col-lg-auto col-6">
    <h4 className="text-20 fw-500">{title}</h4>
    <ul className="y-gap-10 mt-20 text-14">
      {links.map(({href, text}, index) => (
        <li key={index}>
          <a className="d-block" href={href}>
            {text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkList;
