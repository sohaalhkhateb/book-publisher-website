import { useEffect, useState } from "react"
import api from '../../lib/axios'
import { Button } from "../../components/Button";
import { useNavigate } from "react-router";
import plusIcon from '../../assets/images/icons/plus2.png'

export function Resources() {

  const [info, setInfo] = useState({});
  const [queryFilter, setQueryFilter] = useState('');
  const [usedFilter, setUsedFilter] = useState('');

  const navigate = useNavigate()


  useEffect(() => {
    api.get(`/resources${queryFilter}`)
      .then((response) => {
        setInfo(response.data)
      }).catch((errors) => {
        console.log(errors.response.data)
      })

  }, [queryFilter])
  return (
    <>
      <p onClick={() => {setQueryFilter('?orderBy=highestCost'); setUsedFilter('ordered by cost')}}>
        {info.totalCost}
      </p>

      <p onClick={() => {setQueryFilter('?orderBy=highestStock'); setUsedFilter('ordered by stock')}}>
        {info.totalStock}
      </p>

      <p onClick={() => {setQueryFilter('?filterBy=lowStock'); setUsedFilter('showing low stock resources only')}}>
        {info.lowStockCount}
      </p>

      <p onClick={() => {setQueryFilter('?filterBy=outOfStock'); setUsedFilter('showing \'out of stock\' resources only')}}>
        {info.outOfStockCount}
      </p>

      <h1>{usedFilter}</h1>
      {
        info.resources?.map((resource) => {
          return (

            <div
              onClick={() => navigate(`/resources/${resource.id}`)}
              key={resource.id}
            >

              <p>item : {resource.name}</p>
              <p>category : {resource.category}</p>
              <p>quantity :{`${resource.stock} ${resource.unit}`}</p>
              <p>low stock threshold : {resource.min_stock}</p>
              <p>supplier :{resource.supplier}</p>
              <p>status : {resource.status}</p>
              <hr />

            </div>
          )
        })
      }

      <Button
        text='create a new resource'
        position='right'
        color='var(--success)'
        image={plusIcon}
        onClick={() => navigate('/resources/add')}
      />
    </>
  )
}