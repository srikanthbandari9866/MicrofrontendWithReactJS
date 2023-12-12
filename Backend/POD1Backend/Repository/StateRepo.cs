using Microsoft.EntityFrameworkCore;
using POD1.Model;
using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Repository
{
    public class StateRepo : IStateRepo
    {
        private readonly PODContext _podContext = null;
        public StateRepo(PODContext podContext)
        {
            _podContext = podContext;
        }

        public async Task<IEnumerable<State>> GetStates()
        {
            return await _podContext.State.ToListAsync();
        }
     
        public async Task<State> GetStateById(int id)
        {
            return await _podContext.State
                .FirstOrDefaultAsync(e => e.StateId == id);
        }
    }
}
