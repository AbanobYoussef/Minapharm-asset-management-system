using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class TransportAsset
    {
        public Guid Id { get; set; }
        public string Manufacturer { get; set; }
        public string Model  { get; set; }
        public string Year { get; set; }


        public string EmployeeId { get; set; }
        public virtual Employee Employee { get; set; }
    }
}
