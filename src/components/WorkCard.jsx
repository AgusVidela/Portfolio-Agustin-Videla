import '../assets/css/workCard.css';

// eslint-disable-next-line react/prop-types
const WorkCard = ({Work, Company, Years}) => {
  return (
    <>
    <div className="work_card_content">
    <div className="content_work">
        <div className="circle"></div>
            <h1 className="work_card_title font-medium text-jr-text">{Company}</h1>
    </div>
            <div className="work_details">
                <h1>{Work}</h1>
                <p>{Years}</p>
            </div>
    </div>
  </>
  )
}

export default WorkCard