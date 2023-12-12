using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using POD1.Model;
using POD1Backend.Model;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EyController : ControllerBase
    {
        private readonly PODContext _pODContext;
        public EyController(PODContext pODContext)
        {
            _pODContext = pODContext;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EyParent>>> GetEyData()
        {
            try
            {
                List<EyParent> parents = await _pODContext.EyParent.ToListAsync();
                List<EyChild> children = await _pODContext.EyChild.ToListAsync();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = children.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                   res.Add(arr);

                }
                    return  res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }

        [HttpGet("cluster/{cluster}")]
        public ActionResult<IEnumerable<EyParent>> GetEyDataByCluster(string cluster)
        {
            try
            {
                List<EyParent> parents = _pODContext.EyParent.Where(e => e.Cluster == cluster).ToList();
                List<EyChild> chlidren = _pODContext.EyChild.ToList();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = _pODContext.EyChild.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                    res.Add(arr);

                }
                return res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }

        [HttpGet("application/{app}")]
        public ActionResult<IEnumerable<EyParent>> GetEyDataByApplication(string app)
        {
            try
            {
                //string app1 = app.ToLower((new CultureInfo("tr-TR", false)));
                List<EyParent> parents = _pODContext.EyParent.Where(e => e.Application == app).ToList();
                List<EyChild> chlidren = _pODContext.EyChild.ToList();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = _pODContext.EyChild.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                    res.Add(arr);

                }
                return res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }


        [HttpGet("type/{type}")]
        public ActionResult<IEnumerable<EyParent>> GetEyDataByTax(string type)
        {
            try
            {
                List<EyParent> parents = _pODContext.EyParent.Where(e => e.Type == type).ToList();
                List<EyChild> chlidren = _pODContext.EyChild.ToList();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = _pODContext.EyChild.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                    res.Add(arr);

                }
                return res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }

        [HttpGet("technology/{tech}")]
        public ActionResult<IEnumerable<EyParent>> GetEyDataByTechnology(string tech)
        {
            try
            {
                List<EyParent> parents = _pODContext.EyParent.ToList();
                List<EyChild> children = _pODContext.EyChild.Where(e => e.Technology == tech).ToList();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = children.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                    res.Add(arr);

                }
                return res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }

        [HttpGet("platform/{p}")]
        public ActionResult<IEnumerable<EyParent>> GetEyDataByPlatform(string p)
        {
            try
            {
                List<EyParent> parents = _pODContext.EyParent.ToList();
                List<EyChild> children = _pODContext.EyChild.Where(e => e.Platform == p).ToList();

                List<EyParent> res = new List<EyParent>();

                foreach (EyParent parent in parents)
                {
                    var child = children.Where(e => e.ApplicationId == parent.ApplicationId);
                    var arr = new EyParent
                    {
                        ApplicationId = parent.ApplicationId,
                        Cluster = parent.Cluster,
                        Application = parent.Application,
                        Type = parent.Type,
                        EyChild = child.ToList()
                    };
                    res.Add(arr);

                }
                return res;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
            }
        }
    }
}
