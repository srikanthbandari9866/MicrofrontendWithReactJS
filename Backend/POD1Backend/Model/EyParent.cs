using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace POD1Backend.Model
{
    public class EyParent
    {
        [Key]
        public int ApplicationId { get; set; }
        public int ClusterId { get; set; }
        public string Cluster { get; set; }
        public string Application { get; set; }
        public string Type { get; set; }
        public int Active { get; set; }
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }

        public ICollection<EyChild> EyChild { get; set; }
    }
}
