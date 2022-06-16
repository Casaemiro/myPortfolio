const SectionHeader = ({secHead,secId}) => {
    return ( 
        <div className="section-header">
            <h1 id={secId}>
                {secHead}
            </h1>
        </div>
     );
}
 
export default SectionHeader;