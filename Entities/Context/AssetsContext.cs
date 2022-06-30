using Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Context
{
    public class AssetsContext :DbContext
    {
        public AssetsContext()
        {
        }

        public AssetsContext(DbContextOptions<AssetsContext> options)
            : base(options)
        {
        }


        public virtual DbSet<TransportAsset> TransportAssets { get; set; } = null!;
        public virtual DbSet<DeviceAsset> DeviceAssets { get; set; } = null!;
        public virtual DbSet<Employee> Employees { get; set; } = null!;
    }
}
