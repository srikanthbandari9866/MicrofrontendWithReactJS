using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Repository
{
    public interface ICityRepo
    {
        Task<IEnumerable<City>> GetCitys();
        public List<City> GetCityByStateId(int id);
        Task<List<City>> GetCitiesByStateId(int id);
    }
}
