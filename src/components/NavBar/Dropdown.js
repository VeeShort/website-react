import './Dropdown.scss';

const Dropdown = ({ items: { id, active, options, sub } }) => (
  <ul key={'ul-' + id} className={`sub-menu ${id === '00' ? 'main' : ''} ${active ? 'active' : ''}`}>
    {options.map(({ label, isDropdown }, optI) => (
      isDropdown
        ? (
          <li className="option" key={id + optI}>
            <a href="#">{label}</a>
            <span>
              <i className="ion-chevron-right" />
            </span>
            <Dropdown items={sub} />
          </li>
          )
        : (
          <li className="option" key={id + optI}>
            <a href="#">{label}</a>
          </li>
          )
    ))}
  </ul>
);

export default Dropdown;
