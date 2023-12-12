using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Repository
{
    public interface IStateRepo
    {
        Task<IEnumerable<State>> GetStates();
        Task<State> GetStateById(int id);
    }
}
