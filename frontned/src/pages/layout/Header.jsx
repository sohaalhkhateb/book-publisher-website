export function Header({ exists }) {
  return (
    <div
      style={{
        backgroundColor: 'red',
        height: '60px',
        opacity: '30%',
        position: 'sticky',
        zIndex: 999,
        top:'0px'
      }}
    >

      <div>
        {exists && <p>search bar here</p>}
      </div>
    </div>
  )
}