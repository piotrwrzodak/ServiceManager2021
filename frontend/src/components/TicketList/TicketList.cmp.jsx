import { Link, useRouteMatch } from 'react-router-dom';

function TicketList() {
  let { url } = useRouteMatch();

  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        <li>
          <Link to={`${url}/ticket-id1`}>Ticket 1</Link>
        </li>
        <li>
          <Link to={`${url}/ticket-id2`}>Ticket 2</Link>
        </li>
        <li>
          <Link to={`${url}/ticket-id3`}>Ticket 3</Link>
        </li>
        <li>
          <Link to={`${url}/new`}>new</Link>
        </li>
      </ul>
    </div>
  );
}

export default TicketList;
