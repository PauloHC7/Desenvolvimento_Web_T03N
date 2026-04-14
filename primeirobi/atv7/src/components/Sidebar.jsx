export default function Sidebar({ links }) {
  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </aside>
  );
}