using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace POD1Backend.Model
{
    public class EyChild
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("ApplicationId")]
        public int? ApplicationId { get; set; }
        [JsonIgnore]
        public EyParent EyParent { get; set; }
        public string Technology { get; set; }
        public string Platform { get; set; }
        public int Active { get; set; }
        [JsonIgnore]
        public string CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        [JsonIgnore]
        public string UpdatedBy { get; set; }
        public DateTime UpdatedOn { get; set; }
    }
}
