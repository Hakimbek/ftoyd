import './Detail.css';

interface DetailsProps {
  name: string;
  value: string | number;
}

const Detail = ({ name, value }: DetailsProps) => {
  return (
    <div className="detail inter-font font-small">
      {name}: <span className="value inter-font font-normal">{value}</span>
    </div>
  );
};

export default Detail;
