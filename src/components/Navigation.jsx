
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink to="" end className={({ isActive }) => isActive ? 'active' : ''}>Overview</NavLink>
      <NavLink to="solutions" className={({ isActive }) => isActive ? 'active' : ''}>Solutions</NavLink>
      <NavLink to="impact" className={({ isActive }) => isActive ? 'active' : ''}>Impact</NavLink>
    </nav>
  );
}
