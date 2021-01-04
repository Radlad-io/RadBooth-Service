import Sidebar from '../components/Sidebar'
import PageTitle from '../components/PageTitle'
import Stats from '../components/Stats'
import Feed from '../components/Feed'

function Dashboard() {
    return (
<div className="h-screen flex overflow-hidden bg-gray-100">
  <Sidebar />
  <div className="flex flex-col w-0 flex-1 overflow-hidden bg-gray-lightest">
    <main className="flex-1 relative overflow-y-auto focus:outline-none" tabindex="0">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <PageTitle title='Account Information'/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">

          </div>

        </div>
      </div>
    </main>
  </div>
</div>
    )
  }
  
  export default Dashboard
  