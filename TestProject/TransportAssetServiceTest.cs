using AutoMapper;
using Entities.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Repositories.IGenericRepository;
using Services.Service;

namespace TestProject
{
    [TestClass]
    public class TransportAssetServiceTest
    {
        private readonly IUnitOfWork<TransportAsset> _transportAsset;

        private IMapper _mapper;

        public TransportAssetServiceTest()
        {
            _transportAsset = new UnitOfWork<TransportAsset>();
        }
        [TestMethod]
        public void Delete()
        {
            TransportAssetService _transportAssetService = new TransportAssetService();
        }
    }
}