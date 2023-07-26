import React from 'react'

export default function OrdersListView() {
  return (
    <div>
      <p className='text-2xl font-Lato mt-10 mb-5'>Orders</p> 
      <p className='text-lg'>Al art sells</p>
      <p className='text-xs text-[#B3B3B3] mb-3'>Monitor artist sales, reviews, etc.</p>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-center text-sm font-light">
              <thead
                className="border-b bg-[#F6F6F6] font-medium text-black">
                <tr>
                  <th scope="col" className=" px-6 py-4">#</th>
                  <th scope="col" className=" px-6 py-4">First</th>
                  <th scope="col" className=" px-6 py-4">Last</th>
                  <th scope="col" className=" px-6 py-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b ">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap  px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap  px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap  px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b ">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap  px-6 py-4 ">Jacob</td>
                  <td className="whitespace-nowrap  px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap  px-6 py-4">@fat</td>
                </tr>
                <tr className="border-b ">
                  <td className="whitespace-nowrap  px-6 py-4 font-medium">3</td>
                  <td colSpan={2} className="whitespace-nowrap  px-6 py-4">
                    Larry the Bird
                  </td>
                  <td className="whitespace-nowrap  px-6 py-4">@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
