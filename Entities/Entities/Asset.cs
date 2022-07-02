using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Entities
{
    public class Asset
    {
        public Guid Id { get; set; }
        public string AssetName { get; set; }
        public string Manufacturer { get; set; }
        public string Model { get; set; }
    }
}
