using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class TransportAsset : Asset
    {
        public string Year { get; set; }

        public string? DriverId { get; set; }
    }
}
