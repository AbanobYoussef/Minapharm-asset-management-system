using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public  class DeviceAsset: Asset
    {
        public string Version { get; set; }
        public string Processor { get; set; }
        public string InstallesMomory { get; set; }


        public string? OwnerId { get; set; }
    }
}
