
export const Card = (props) => {
    return (
      <div className="card">
        <div style={{ margin: '1em' }}>
          <img className="avatar user-info" alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
            <div className="user-info" style={{ fontWeight: 'bold' }}>{props.name}</div>
          <div className="user-info">
            <div>{props.id}</div>
            <ul>
              <li><strong> Following: </strong>{props.following}</li>
              <li><strong> Repos: </strong>{props.public_repos}</li>
            </ul>
          </div>
        </div>
      </div>
    )
}