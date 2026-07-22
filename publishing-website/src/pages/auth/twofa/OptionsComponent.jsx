
export function OptionsComponent({ internationalIds }) {

  return (
    <>
      {
        internationalIds.map((internationalId) => {
          return (
            <option value={internationalId.number}
              key={internationalId.id}
            >
              {internationalId.number}
            </option>
          )
        })
      }
    </>
  )
}