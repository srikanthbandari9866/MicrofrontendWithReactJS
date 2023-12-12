using Microsoft.EntityFrameworkCore;
using POD1.Model;
using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Repository
{
    public class CityRepo : ICityRepo
    {
        private readonly PODContext _podContext = null;
        public  CityRepo(PODContext podContext)
        {
            _podContext = podContext;
        }
        public async Task<IEnumerable<City>> GetCitys()
        {
            return await _podContext.City.ToListAsync();
        }

        public List<City> GetCityByStateId(int id)

        {
            List<City> list = new List<City>();
            foreach (var item in _podContext.City)
            {
                if (item.StateId == id)
                {
                    list.Add(item);
                }
            }
            return list;
        }

        public async Task<List<City>> GetCitiesByStateId(int id)
        {
            var list = new List<City>();
            var cities = await _podContext.City.ToListAsync();
            foreach (var item in cities)
            {
                if (item.StateId == id)
                {
                    list.Add(item);
                }
            }
            return list;
        }
    }
}
